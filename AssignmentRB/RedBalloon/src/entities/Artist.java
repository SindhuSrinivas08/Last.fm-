package entities;

import javax.xml.bind.annotation.*;

@XmlRootElement(name="artist")
public class Artist {
	
	private String name;
	private String listeners;
	private String mbid;
	private String url;
	private String imagePath;
	
	@XmlElement(name="name")
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@XmlElement(name="listeners")
	public String getListeners() {
		return listeners;
	}
	public void setListeners(String listeners) {
		this.listeners = listeners;
	}
	@XmlElement(name="mbid")
	public String getMbid() {
		return mbid;
	}
	public void setMbid(String mbid) {
		this.mbid = mbid;
	}
	@XmlElement(name="url")
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	
	public String getImagePath() {
		return imagePath;
	}
	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}
	public Artist(String name, String listeners, String mbid, String url,String imagePath) {
		super();
		this.name = name;
		this.listeners = listeners;
		this.mbid = mbid;
		this.url = url;
		this.imagePath = imagePath;
	}
	public Artist() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
