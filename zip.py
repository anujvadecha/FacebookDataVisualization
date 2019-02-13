import zipfile
import sys,os
folder = 'C:/Users/Nayan/Desktop/zipfiles'
extension = ".zip"

for item in os.listdir(folder):
	if item.endswith(extension):
		zip_ref = zipfile.ZipFile(folder+'/'+item)
		zip_ref.extractall("C:/Users/Nayan/Desktop") # extract file to dir
		zip_ref.close() # close file