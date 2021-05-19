"""Package configuration."""
from setuptools import find_packages, setup

setup(
    name='pylike',
    version='0.0.1',
    description='A pylike game',
    author='tzapil',
    author_email='tzapil@yandex.ru',
    packages=['pylike'],  #same as name
    install_requires=["pygame", "numpy"],
)