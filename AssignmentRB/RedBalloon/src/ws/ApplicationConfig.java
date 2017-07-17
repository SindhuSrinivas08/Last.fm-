package ws;
import java.util.*;
import com.sun.research.ws.wadl.Application;

public class ApplicationConfig extends Application{
	
	public Set<Class<?>> getClasses(){
		Set<Class<?>> resources = new java.util.HashSet<>();
		addRestResourceClasses(resources);
		return resources;
	}
	
	private void addRestResourceClasses(Set<Class<?>> resources){
		resources.add(ws.ArtistRestFul.class);
	}
}
