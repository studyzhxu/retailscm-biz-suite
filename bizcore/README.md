# skynet-common-app-framework
Common App Framework, a replacement of modern app
```
package mail;

import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.SendFailedException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;


public class SendMail {
	

	
	
	
	protected static void sendWithAttachment(Transport transport, MimeMessage message, String body, String filePaths[]) throws MessagingException{
		BodyPart messageBodyPart = new MimeBodyPart();

        // Now set the actual message
        messageBodyPart.setText(body);

        // Create a multipar message
        Multipart multipart = new MimeMultipart();

        // Set text message part
        multipart.addBodyPart(messageBodyPart);

        for(String filePath: filePaths){
            messageBodyPart = new MimeBodyPart();
            String filename = filePath;
            DataSource source = new FileDataSource(filename);
            messageBodyPart.setDataHandler(new DataHandler(source));
            messageBodyPart.setFileName(filename);
            multipart.addBodyPart(messageBodyPart);
        }
        // Part two is attachment
        message.setContent(multipart);
        
        // Send the complete message parts
        
        System.out.println("hello from new version");
        
		transport.sendMessage(message, message.getAllRecipients());
		
	}
	/**
	 * @param args
	 */
	public static void main(String[] args) throws SendFailedException {
		
		
		if(args.length<2){
			
			System.out.println("Please input the title and content for the mail");
			
			return;
		}
		
		String fromAddress = "report@bettbio.com";
		String toAddress = "philip_chang@163.com";
		String subject = args[0];
		String body = args[1];
		
		
		
		try {
			// prepare the properties
			Properties props = new Properties();
			/*
			 * if your working in a company , you can ask your network team for
			 * the name of SMTP host server of your comapnny OR instead you can
			 * ask IPaddress of the SMTP host serevr
			 */
			// Replase the value assigned to smtpHostName String with your
			// smtphost name
			// eg : String smtpHostName="121.34.56.78";
			props.put("mail.smtp.from", "report@bettbio.com");
			props.put("mail.smtp.host", "42.120.219.29");
			props.put("mail.smtp.port", 465);
			props.put("mail.smtp.auth", "true");
			props.put("mail.smtp.starttls.enable","true");
			props.put("mail.smtp.debug", "true");
			props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
	        
			//SMTPAuthenticator auth = new SMTPAuthenticator();
			Session session = Session.getInstance(props,  null);
			Transport transport = session.getTransport("smtps");
			transport.connect("42.120.219.29", 465, "report@bettbio.com", "bk123456!");
			
			// Create a MImeMessage MimeMessage message = new
			// MimeMessage(session);
			MimeMessage message = new MimeMessage(session);
			InternetAddress from = new InternetAddress(fromAddress);
			// Set from address to message
			message.setFrom(from);
			InternetAddress to = new InternetAddress(toAddress);
			// Set to address to message , if you want to send mail to multiple
			// reciepents you have to use
			// setRecipient method
			message.addRecipient(Message.RecipientType.TO, to);
			// set the subject
			message.setSubject(subject);
			// set the body
			if(args.length >=3 ){
				
				String [] filePaths = new String[args.length-2];
				
				System.arraycopy(args, 2, filePaths, 0, args.length-2);
				
				sendWithAttachment(transport, message, body, filePaths);
				
				
				
				return;
				
			}
			
			message.setText(body);
			
			
			
			// calling send method of javax.mail.Transport class
			//transport.send(message);
			//transport.connect();
			//transport.connect("smtp.bettbio.com", "465");
			System.out.println("hello from new version");
			transport.sendMessage(message, message.getAllRecipients());
		} catch (SendFailedException sendfailedException) {
			sendfailedException.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}

```
