package com.ssm.cqg.factory;

import com.ssm.cqg.app.BcosApp;

public class BcosAppFactory {
	
	private static BcosApp app = null;
	
	public static BcosApp getInstance() {
		if (app == null) {
			app = new BcosApp();
		}
		return app;
	}
		
}
