package com.app.api.theme;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.theme.Theme;
import com.app.model.user.UserResponse;
import com.app.repo.ThemeRepo;

@RestController
public class ThemeController {
	 @Autowired private ThemeRepo themeRepo;
	 
	 @RequestMapping(value = "/themes", method = RequestMethod.GET)
	 public List<Theme> getAllThemes() {
		 return themeRepo.findAll();
	 }
	/* 
	 @RequestMapping(value = "/theme", method = RequestMethod.GET, produces = {"application/json"})
		public Theme getThemeById(@RequestParam(value = "id", required = true) Integer themeIdParam, HttpServletRequest req) {
		 return themeRepo.findOneById(themeIdParam).get();
		 
	 }*/

	 @RequestMapping(value = "/theme", method = RequestMethod.GET, produces = {"application/json"})
		public List<Theme> getHierarchiThemeById(@RequestParam(value = "id", required = true) Integer themeIdParam, HttpServletRequest req) {
		 return themeRepo.getHierarchiById(themeIdParam);
		 
	 }

}
