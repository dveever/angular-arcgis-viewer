package com.gisview;

import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

@SpringBootApplication
public class AngularArcgisViewer {

  public static void main(String[] args){
    new SpringApplicationBuilder(AngularArcgisViewer.class)
        .web(WebApplicationType.SERVLET)
        .run(args);
  }
}
