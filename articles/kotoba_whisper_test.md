---
title: kotoba-whisperを使ってみる
emoji: 😸
type: tech
topics: [Huggingface, AI]
published: false
---

## 概要
kootba whisperを使ってみたのでpowershellでのコマンド操作をまとめておく


### Powershell上の動作
```powershell
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

新機能と改善のために最新の PowerShell をインストールしてください!https://aka.ms/PSWindows

PS C:\Users\YN> vi ~/.bash_profile
vi : 用語 'vi' は、コマンドレット、関数、スクリプト ファイル、または操作可能なプログラムの名前として認識されません。名
前が正しく記述されていることを確認し、パスが含まれている場合はそのパスが正しいことを確認してから、再試行してください。
発生場所 行:1 文字:1
+ vi ~/.bash_profile
+ ~~
    + CategoryInfo          : ObjectNotFound: (vi:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException

PS C:\Users\YN> cd ~
PS C:\Users\YN> cd~
cd~ : 用語 'cd~' は、コマンドレット、関数、スクリプト ファイル、または操作可能なプログラムの名前として認識されません。
名前が正しく記述されていることを確認し、パスが含まれている場合はそのパスが正しいことを確認してから、再試行してください
。
発生場所 行:1 文字:1
+ cd~
+ ~~~
    + CategoryInfo          : ObjectNotFound: (cd~:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException

PS C:\Users\YN> mkdir huggingface_project


    ディレクトリ: C:\Users\YN


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        2024/12/23      1:46                huggingface_project


PS C:\Users\YN> cd huggingface_project
PS C:\Users\YN\huggingface_project> python3 -m venv venv
Python
PS C:\Users\YN\huggingface_project> python3 -m venv venv
Python
PS C:\Users\YN\huggingface_project> python3 --version
Python
PS C:\Users\YN\huggingface_project> python -m venv venv
PS C:\Users\YN\huggingface_project> source venv/bin/activate
source : 用語 'source' は、コマンドレット、関数、スクリプト ファイル、または操作可能なプログラムの名前として認識されま
せん。名前が正しく記述されていることを確認し、パスが含まれている場合はそのパスが正しいことを確認してから、再試行してく
ださい。
発生場所 行:1 文字:1
+ source venv/bin/activate
+ ~~~~~~
    + CategoryInfo          : ObjectNotFound: (source:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException

PS C:\Users\YN\huggingface_project> .\venv\Scripts\Activate.ps1
.\venv\Scripts\Activate.ps1 : このシステムではスクリプトの実行が無効になっているため、ファイル C:\Users\YN\huggingface_
project\venv\Scripts\Activate.ps1 を読み込むことができません。詳細については、「about_Execution_Policies」(https://go.m
icrosoft.com/fwlink/?LinkID=135170) を参照してください。
発生場所 行:1 文字:1
+ .\venv\Scripts\Activate.ps1
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : セキュリティ エラー: (: ) []、PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
PS C:\Users\YN\huggingface_project> Get-ExecutionPolicy
Restricted
PS C:\Users\YN\huggingface_project> Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
PS C:\Users\YN\huggingface_project> Get-ExecutionPolicy
Bypass
PS C:\Users\YN\huggingface_project> .\venv\Scripts\Activate.ps1
(venv) PS C:\Users\YN\huggingface_project> code .
(venv) PS C:\Users\YN\huggingface_project> pip install faster-whisper
Collecting faster-whisper
  Downloading faster_whisper-1.1.0-py3-none-any.whl.metadata (16 kB)
Collecting ctranslate2<5,>=4.0 (from faster-whisper)
  Downloading ctranslate2-4.5.0-cp312-cp312-win_amd64.whl.metadata (10 kB)
Collecting huggingface-hub>=0.13 (from faster-whisper)
  Downloading huggingface_hub-0.27.0-py3-none-any.whl.metadata (13 kB)
Collecting tokenizers<1,>=0.13 (from faster-whisper)
  Downloading tokenizers-0.21.0-cp39-abi3-win_amd64.whl.metadata (6.9 kB)
Collecting onnxruntime<2,>=1.14 (from faster-whisper)
  Downloading onnxruntime-1.20.1-cp312-cp312-win_amd64.whl.metadata (4.7 kB)
Collecting av>=11 (from faster-whisper)
  Downloading av-14.0.1-cp312-cp312-win_amd64.whl.metadata (4.6 kB)
Collecting tqdm (from faster-whisper)
  Downloading tqdm-4.67.1-py3-none-any.whl.metadata (57 kB)
Collecting setuptools (from ctranslate2<5,>=4.0->faster-whisper)
  Downloading setuptools-75.6.0-py3-none-any.whl.metadata (6.7 kB)
Collecting numpy (from ctranslate2<5,>=4.0->faster-whisper)
  Downloading numpy-2.2.1-cp312-cp312-win_amd64.whl.metadata (60 kB)
Collecting pyyaml<7,>=5.3 (from ctranslate2<5,>=4.0->faster-whisper)
  Using cached PyYAML-6.0.2-cp312-cp312-win_amd64.whl.metadata (2.1 kB)
Collecting filelock (from huggingface-hub>=0.13->faster-whisper)
  Using cached filelock-3.16.1-py3-none-any.whl.metadata (2.9 kB)
Collecting fsspec>=2023.5.0 (from huggingface-hub>=0.13->faster-whisper)
  Downloading fsspec-2024.12.0-py3-none-any.whl.metadata (11 kB)
Collecting packaging>=20.9 (from huggingface-hub>=0.13->faster-whisper)
  Using cached packaging-24.2-py3-none-any.whl.metadata (3.2 kB)
Collecting requests (from huggingface-hub>=0.13->faster-whisper)
  Using cached requests-2.32.3-py3-none-any.whl.metadata (4.6 kB)
Collecting typing-extensions>=3.7.4.3 (from huggingface-hub>=0.13->faster-whisper)
  Using cached typing_extensions-4.12.2-py3-none-any.whl.metadata (3.0 kB)
Collecting coloredlogs (from onnxruntime<2,>=1.14->faster-whisper)
  Downloading coloredlogs-15.0.1-py2.py3-none-any.whl.metadata (12 kB)
Collecting flatbuffers (from onnxruntime<2,>=1.14->faster-whisper)
  Downloading flatbuffers-24.3.25-py2.py3-none-any.whl.metadata (850 bytes)
Collecting protobuf (from onnxruntime<2,>=1.14->faster-whisper)
  Downloading protobuf-5.29.2-cp310-abi3-win_amd64.whl.metadata (592 bytes)
Collecting sympy (from onnxruntime<2,>=1.14->faster-whisper)
  Downloading sympy-1.13.3-py3-none-any.whl.metadata (12 kB)
Collecting colorama (from tqdm->faster-whisper)
  Using cached colorama-0.4.6-py2.py3-none-any.whl.metadata (17 kB)
Collecting humanfriendly>=9.1 (from coloredlogs->onnxruntime<2,>=1.14->faster-whisper)
  Downloading humanfriendly-10.0-py2.py3-none-any.whl.metadata (9.2 kB)
Collecting charset-normalizer<4,>=2 (from requests->huggingface-hub>=0.13->faster-whisper)
  Using cached charset_normalizer-3.4.0-cp312-cp312-win_amd64.whl.metadata (34 kB)
Collecting idna<4,>=2.5 (from requests->huggingface-hub>=0.13->faster-whisper)
  Using cached idna-3.10-py3-none-any.whl.metadata (10 kB)
Collecting urllib3<3,>=1.21.1 (from requests->huggingface-hub>=0.13->faster-whisper)
  Downloading urllib3-2.3.0-py3-none-any.whl.metadata (6.5 kB)
Collecting certifi>=2017.4.17 (from requests->huggingface-hub>=0.13->faster-whisper)
  Downloading certifi-2024.12.14-py3-none-any.whl.metadata (2.3 kB)
Collecting mpmath<1.4,>=1.1.0 (from sympy->onnxruntime<2,>=1.14->faster-whisper)
  Using cached mpmath-1.3.0-py3-none-any.whl.metadata (8.6 kB)
Collecting pyreadline3 (from humanfriendly>=9.1->coloredlogs->onnxruntime<2,>=1.14->faster-whisper)
  Downloading pyreadline3-3.5.4-py3-none-any.whl.metadata (4.7 kB)
Downloading faster_whisper-1.1.0-py3-none-any.whl (1.1 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 1.1/1.1 MB 11.0 MB/s eta 0:00:00
Downloading av-14.0.1-cp312-cp312-win_amd64.whl (25.8 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 25.8/25.8 MB 11.0 MB/s eta 0:00:00
Downloading ctranslate2-4.5.0-cp312-cp312-win_amd64.whl (19.5 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 19.5/19.5 MB 11.1 MB/s eta 0:00:00
Downloading huggingface_hub-0.27.0-py3-none-any.whl (450 kB)
Downloading onnxruntime-1.20.1-cp312-cp312-win_amd64.whl (11.3 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 11.3/11.3 MB 11.1 MB/s eta 0:00:00
Downloading tokenizers-0.21.0-cp39-abi3-win_amd64.whl (2.4 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.4/2.4 MB 10.5 MB/s eta 0:00:00
Downloading tqdm-4.67.1-py3-none-any.whl (78 kB)
Downloading fsspec-2024.12.0-py3-none-any.whl (183 kB)
Downloading numpy-2.2.1-cp312-cp312-win_amd64.whl (12.6 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 12.6/12.6 MB 11.1 MB/s eta 0:00:00
Using cached packaging-24.2-py3-none-any.whl (65 kB)
Using cached PyYAML-6.0.2-cp312-cp312-win_amd64.whl (156 kB)
Using cached typing_extensions-4.12.2-py3-none-any.whl (37 kB)
Using cached colorama-0.4.6-py2.py3-none-any.whl (25 kB)
Downloading coloredlogs-15.0.1-py2.py3-none-any.whl (46 kB)
Using cached filelock-3.16.1-py3-none-any.whl (16 kB)
Downloading flatbuffers-24.3.25-py2.py3-none-any.whl (26 kB)
Downloading protobuf-5.29.2-cp310-abi3-win_amd64.whl (434 kB)
Using cached requests-2.32.3-py3-none-any.whl (64 kB)
Downloading setuptools-75.6.0-py3-none-any.whl (1.2 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 1.2/1.2 MB 10.3 MB/s eta 0:00:00
Downloading sympy-1.13.3-py3-none-any.whl (6.2 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 6.2/6.2 MB 10.5 MB/s eta 0:00:00
Downloading certifi-2024.12.14-py3-none-any.whl (164 kB)                                                                Using cached charset_normalizer-3.4.0-cp312-cp312-win_amd64.whl (102 kB)                                                Downloading humanfriendly-10.0-py2.py3-none-any.whl (86 kB)                                                             Using cached idna-3.10-py3-none-any.whl (70 kB)                                                                         Using cached mpmath-1.3.0-py3-none-any.whl (536 kB)
Downloading urllib3-2.3.0-py3-none-any.whl (128 kB)
Downloading pyreadline3-3.5.4-py3-none-any.whl (83 kB)
Installing collected packages: mpmath, flatbuffers, urllib3, typing-extensions, sympy, setuptools, pyyaml, pyreadline3, protobuf, packaging, numpy, idna, fsspec, filelock, colorama, charset-normalizer, certifi, av, tqdm, requests, humanfriendly, ctranslate2, huggingface-hub, coloredlogs, tokenizers, onnxruntime, faster-whisper
Successfully installed av-14.0.1 certifi-2024.12.14 charset-normalizer-3.4.0 colorama-0.4.6 coloredlogs-15.0.1 ctranslate2-4.5.0 faster-whisper-1.1.0 filelock-3.16.1 flatbuffers-24.3.25 fsspec-2024.12.0 huggingface-hub-0.27.0 humanfriendly-10.0 idna-3.10 mpmath-1.3.0 numpy-2.2.1 onnxruntime-1.20.1 packaging-24.2 protobuf-5.29.2 pyreadline3-3.5.4 pyyaml-6.0.2 requests-2.32.3 setuptools-75.6.0 sympy-1.13.3 tokenizers-0.21.0 tqdm-4.67.1 typing-extensions-4.12.2 urllib3-2.3.0

[notice] A new release of pip is available: 24.2 -> 24.3.1
[notice] To update, run: python.exe -m pip install --upgrade pip
(venv) PS C:\Users\YN\huggingface_project> from faster_whisper import WhisperModel
発生場所 行:1 文字:1
+ from faster_whisper import WhisperModel
+ ~~~~
このバージョンの言語では、'from' キーワードがサポートされていません。
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : ReservedKeywordNotAllowed

(venv) PS C:\Users\YN\huggingface_project> wget https://huggingface.co/kotoba-tech/kotoba-whisper-v1.0-ggml/resolve/main/sample_ja_speech.wav


StatusCode        : 200
StatusDescription : OK
Content           : {82, 73, 70, 70...}
RawContent        : HTTP/1.1 200 OK
                    Connection: keep-alive
                    x-amz-storage-class: INTELLIGENT_TIERING
                    x-amz-server-side-encryption: AES256
                    x-amz-version-id: null
                    Content-Disposition: inline; filename*=UTF-8''sample_ja...
Headers           : {[Connection, keep-alive], [x-amz-storage-class, INTELLIGENT_TIERING], [x-amz-server-side-encryptio
                    n, AES256], [x-amz-version-id, null]...}
RawContentLength  : 6639070



(venv) PS C:\Users\YN\huggingface_project> from faster_whisper import WhisperModel
発生場所 行:1 文字:1
+ from faster_whisper import WhisperModel
+ ~~~~
このバージョンの言語では、'from' キーワードがサポートされていません。
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : ReservedKeywordNotAllowed

(venv) PS C:\Users\YN\huggingface_project>
(venv) PS C:\Users\YN\huggingface_project> model = WhisperModel("kotoba-tech/kotoba-whisper-v2.0-faster")
model : 用語 'model' は、コマンドレット、関数、スクリプト ファイル、または操作可能なプログラムの名前として認識されませ
ん。名前が正しく記述されていることを確認し、パスが含まれている場合はそのパスが正しいことを確認してから、再試行してくだ
さい。
発生場所 行:1 文字:1
+ model = WhisperModel("kotoba-tech/kotoba-whisper-v2.0-faster")
+ ~~~~~
    + CategoryInfo          : ObjectNotFound: (model:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException

(venv) PS C:\Users\YN\huggingface_project>
(venv) PS C:\Users\YN\huggingface_project> segments, info = model.transcribe("sample_ja_speech.wav", language="ja", chunk_length=15, condition_on_previous_text=False)
発生場所 行:1 文字:9
+ segments, info = model.transcribe("sample_ja_speech.wav", language="j ...
+         ~
パラメーター一覧に引数が存在しません。
発生場所 行:1 文字:58
+ segments, info = model.transcribe("sample_ja_speech.wav", language="j ...
+                                                          ~
',' の後に式が存在しません。
発生場所 行:1 文字:59
+ ... info = model.transcribe("sample_ja_speech.wav", language="ja", chunk_ ...
+                                                     ~~~~~~~~~~~~~
式またはステートメントのトークン 'language="ja"' を使用できません。
発生場所 行:1 文字:58
+ segments, info = model.transcribe("sample_ja_speech.wav", language="j ...
+ ... v", language="ja", chunk_length=15, condition_on_previous_text=False)
+                                                                         ~
式またはステートメントのトークン ')' を使用できません。
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : MissingArgument

(venv) PS C:\Users\YN\huggingface_project> for segment in segments:
発生場所 行:1 文字:4
+ for segment in segments:
+    ~
キーワード 'for' の後に始めの '(' が存在しません。
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : MissingOpenParenthesisAfterKeyword

(venv) PS C:\Users\YN\huggingface_project>     print("[%.2fs -> %.2fs] %s" % (segment.start, segment.end, segment.text))

発生場所 行:1 文字:49
+     print("[%.2fs -> %.2fs] %s" % (segment.start, segment.end, segmen ...
    + FullyQualifiedErrorId : MissingArgument

(venv) PS C:\Users\YN\huggingface_project> python
Python 3.12.6 (tags/v3.12.6:a4a2d2b, Sep  6 2024, 20:11:23) [MSC v.1940 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>> from faster_whisper import WhisperModel
>>>
>>> model = WhisperModel("kotoba-tech/kotoba-whisper-v2.0-faster")
preprocessor_config.json: 100%|███████████████████████████████████████████████████████████████| 340/340 [00:00<?, ?B/s]
C:\Users\YN\huggingface_project\venv\Lib\site-packages\huggingface_hub\file_download.py:140: UserWarning: `huggingface_hub` cache-system uses symlinks by default to efficiently store duplicated files but your machine does not support them in C:\Users\YN\.cache\huggingface\hub\models--kotoba-tech--kotoba-whisper-v2.0-faster. Caching files will still work but in a degraded version that might require more  warnings.warn(message)
model.bin: 100%|██████████████████████████████████████████████████████████████████| 1.51G/1.51G [02:17<00:00, 11.0MB/s]
get device or backend do not support efficient float16 computation. The model weights have been automatically converted to use the float32 compute type instead.
>>>
>>> segments, info = model.transcribe("sample_ja_speech.wav", language="ja", chunk_length=15, condition_on_previous_text=False)
  File "<stdin>", line 1, in <module>
  File "C:\Users\YN\huggingface_project\venv\Lib\site-packages\faster_whisper\transcribe.py", line 821, in transcribe
    audio = decode_audio(audio, sampling_rate=sampling_rate)
  File "C:\Users\YN\huggingface_project\venv\Lib\site-packages\faster_whisper\audio.py", line 46, in decode_audio
    with av.open(input_file, mode="r", metadata_errors="ignore") as container:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "av\\container\\core.pyx", line 236, in av.container.core.Container.__cinit__
  File "av\\container\\core.pyx", line 256, in av.container.core.Container.err_check
  File "av\\error.pyx", line 428, in av.error.err_check
>>> for segment in segments:
...
... dir
  File "<stdin>", line 3
    dir
<built-in function dir>
>>> import os
>>>
Current Directory: C:\Users\YN\huggingface_project
>>>
>>> # ディレクトリの内容をリスト表示
>>> print("Directory Contents:", os.listdir())
Directory Contents: ['venv']
>>> wget https://huggingface.co/kotoba-tech/kotoba-whisper-v1.0-ggml/resolve/main/sample_ja_speech.wav
  File "<stdin>", line 1
    wget https://huggingface.co/kotoba-tech/kotoba-whisper-v1.0-ggml/resolve/main/sample_ja_speech.wav
         ^^^^^
SyntaxError: invalid syntax
>>> cd
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<stdin>", line 1, in <module>
NameError: name 'q' is not defined
>>> q
Traceback (most recent call last):
(venv) PS C:\Users\YN\huggingface_project> cd
(venv) PS C:\Users\YN\huggingface_project> python
Python 3.12.6 (tags/v3.12.6:a4a2d2b, Sep  6 2024, 20:11:23) [MSC v.1940 64 bit (AMD64)] on win32
>>>
>>> segments, info = model.transcribe("sample_ja_speech.wav", language="ja", chunk_length=15, condition_on_previous_text=False)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
    audio = decode_audio(audio, sampling_rate=sampling_rate)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\YN\huggingface_project\venv\Lib\site-packages\faster_whisper\audio.py", line 46, in decode_audio
    with av.open(input_file, mode="r", metadata_errors="ignore") as container:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "av\\container\\core.pyx", line 369, in av.container.core.open
  File "av\\container\\core.pyx", line 236, in av.container.core.Container.__cinit__
  File "av\\container\\core.pyx", line 256, in av.container.core.Container.err_check
  File "av\\error.pyx", line 428, in av.error.err_check
av.error.FileNotFoundError: [Errno 2] No such file or directory: 'sample_ja_speech.wav'
>>> for segment in segments:
...     print("[%.2fs -> %.2fs] %s" % (segment.start, segment.end, segment.text))
... import requests
  File "<stdin>", line 3
...         f.write(response.content)
...     print(f"Downloaded: {file_name}")
... else:
...     print(f"Failed to download. HTTP Status Code: {response.status_code}")
  File "<stdin>", line 7
    pip install requests
    ^^^
(venv) PS C:\Users\YN\huggingface_project> pip install requests
>>> import requests
>>>
>>> url = "https://huggingface.co/kotoba-tech/kotoba-whisper-v1.0-ggml/resolve/main/sample_ja_speech.wav"
>>> file_name = "sample_ja_speech.wav"
>>> if response.status_code == 200:
...     with open(file_name, "wb") as f:
...         f.write(response.content)
...     print(f"Failed to download. HTTP Status Code: {response.status_code}")
... import os
  File "<stdin>", line 7
>>> print("Current Directory Contents:", os.listdir())
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'os' is not defined. Did you forget to import 'os'?
Current Directory Contents: ['venv']
>>> import requests
>>>
>>>
>>> response = requests.get(url)
>>> if response.status_code == 200:
... else:
...     print(f"Failed to download. HTTP Status Code: {response.status_code}")
... from faster_whisper import WhisperModel
  File "<stdin>", line 7
    ^^^^
SyntaxError: invalid syntax
>>>
>>> model = WhisperModel("kotoba-tech/kotoba-whisper-v2.0-faster")
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'WhisperModel' is not defined
>>>
>>> segments, info = model.transcribe("sample_ja_speech.wav", language="ja", chunk_length=15, condition_on_previous_text=False)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'model' is not defined
>>> for segment in segments:
...     print("[%.2fs -> %.2fs] %s" % (segment.start, segment.end, segment.text))
... from faster_whisper import WhisperModel
  File "<stdin>", line 3
    from faster_whisper import WhisperModel
    ^^^^
SyntaxError: invalid syntax
>>>
>>> model = WhisperModel("models")
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'WhisperModel' is not defined
>>>
>>> segments, info = model.transcribe("sample_ja_speech.wav", language="ja", chunk_length=15, condition_on_previous_text=False)
Traceback (most recent call last):
...     print("[%.2fs -> %.2fs] %s" % (segment.start, segment.end, segment.text))
... quit
  File "<stdin>", line 3
(venv) PS C:\Users\YN\huggingface_project> ls


    ディレクトリ: C:\Users\YN\huggingface_project
Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        2024/12/23      2:03                venv
    ディレクトリ: C:\Users\YN\huggingface_project


Mode                 LastWriteTime         Length Name
d-----        2024/12/23      2:09                venv
-a----        2024/12/23      1:59        6639070 sample_ja_speech.wav


Python 3.12.6 (tags/v3.12.6:a4a2d2b, Sep  6 2024, 20:11:23) [MSC v.1940 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>> from faster_whisper import WhisperModel
>>>
[2024-12-23 02:09:21.464] [ctranslate2] [thread 32148] [warning] The compute type inferred from the saved model is float16, but the target device or backend do not support efficient float16 computation. The model weights have been automatically converted to use the float32 compute type instead.
>>>
>>> for segment in segments:
...     print("[%.2fs -> %.2fs] %s" % (segment.start, segment.end, segment.text))
... from faster_whisper import WhisperModel
  File "<stdin>", line 3
    from faster_whisper import WhisperModel
    ^^^^
SyntaxError: invalid syntax
>>>
>>> model = WhisperModel("kotoba-tech/kotoba-whisper-v2.0-faster")
[2024-12-23 02:35:57.476] [ctranslate2] [thread 32148] [warning] The compute type inferred from the saved model is float16, but the target device or backend do not support efficient float16 computation. The model weights have been automatically converted to use the float32 compute type instead.
>>>
>>> segments, info = model.transcribe("sample_ja_speech.wav", language="ja", chunk_length=15, condition_on_previous_text=False)
>>> for segment in segments:
...     print("[%.2fs -> %.2fs] %s" % (segment.start, segment.end, segment.text))
... quit()
  File "<stdin>", line 3
    quit()
    ^^^^
SyntaxError: invalid syntax
>>> python example.py
  File "<stdin>", line 1
    python example.py
           ^^^^^^^
SyntaxError: invalid syntax
>>> python example.py
  File "<stdin>", line 1
    python example.py
           ^^^^^^^
SyntaxError: invalid syntax
>>> python sample.py
  File "<stdin>", line 1
    python sample.py
           ^^^^^^
SyntaxError: invalid syntax
>>> exit()
(venv) PS C:\Users\YN\huggingface_project> python example.py
C:\Users\YN\AppData\Local\Programs\Python\Python312\python.exe: can't open file 'C:\\Users\\YN\\huggingface_project\\example.py': [Errno 2] No such file or directory
(venv) PS C:\Users\YN\huggingface_project> python sample.py
[2024-12-23 02:40:46.467] [ctranslate2] [thread 29248] [warning] The compute type inferred from the saved model is float16, but the target device or backend do not support efficient float16 computation. The model weights have been automatically converted to use the float32 compute type instead.
[0.00s -> 15.00s] NLP5年間、いろいろあったと思うんですけれども、今日のトークでは、NLPの過去5年間を火災の研究であったり、私たちが取り組 んできたプロジェクトを中心に、ちょっと5年間をリフレクトして、どういうきっかけで、言葉テクノロジーズというかどういうふうに、
[15.00s -> 19.64s] そもそも誰やっていう話だったかなと思うんです
[30.00s -> 45.00s] 私、今年、コンデル大学を卒業しまして、本当、ディフェンスをやったのは、つい2、3週間前なんですけれども、もともとはコーネル大学って、ニューヨーク市の土井中の伊坂って、
[45.00s -> 50.24s] コネル大学の実は2つキャンパスがありまして
[50.24s -> 51.92s] 一つは伊阪にあるんですけど
[51.92s -> 53.86s] もう一つはニューヨーク市にある
[53.86s -> 53.94s] インウィーク市にある
[53.94s -> 57.94s] イースト川の上に浮いているルーズベルト島っていう
[57.94s -> 59.96s] すごい細長い島がある
[60.00s -> 62.84s] そこでPHEをやっておりました
[62.84s -> 65.70s] 私は小島っていう名前なんですけども
[65.70s -> 67.00s] 本当にしょうもないネタを言うと
[67.00s -> 69.00s] 小島の上でPHUが吹いたと
[69.00s -> 72.86s] そういう両面感となっております
[75.00s -> 77.72s] 専門部屋としてはマルチモダリティーと呼ばれる
[77.72s -> 80.18s] 自然言語のシステムにどうやったら
[80.18s -> 83.64s] 言語以外の情報を例えば画像であったりとか
[83.64s -> 86.06s] 音声といったものを理解できるようにさせる
[86.06s -> 87.54s] そういったことであったりとか
[87.54s -> 90.00s] インターティブラーニングと呼ばれる
[90.00s -> 94.38s] 最近RHFみたいな言葉がよく使われるようになりましたけど
[94.38s -> 95.78s] 人をどう絡めて
[95.78s -> 98.04s] NLPのシステムを向上させていくか
[98.04s -> 103.72s] そういった件はハギングフェースで
[105.00s -> 110.24s] 学部から実はアメリカに行っていて
[110.24s -> 114.16s] ミシガン州にあるミシガン大学アナーバーコというところがあるんですけども
[114.16s -> 117.24s] そこで学部をやっていて高校まで日本に行きました
[117.24s -> 120.00s] そういったところで火災にバトンダッチさせていただきます
[120.00s -> 122.00s] 今日はよろしくお願いします
[135.00s -> 139.68s] そちらの方でリサーチャーシストプロフェッサーという仕事を持ちだから
[139.68s -> 143.54s] 小島と共に言葉テクロジに取り組んでいるという状況のです
[143.54s -> 148.04s] 私も本当にPHDも手きたて声というか
[148.04s -> 149.20s] 最近撮りまして
[150.00s -> 155.20s] 先月8月に無事シアトルですね西海部のシアトルにあるワシントン大学で
[155.20s -> 157.68s] コンピューサインスの博士課程を卒業しました
[157.68s -> 163.54s] 研究分野としては最初の方は機械翻訳とか
[163.54s -> 165.04s] あとは効率化としては
[165.00s -> 168.30s] その言語生成とかその言語生成のイバリエーションとか
[168.30s -> 169.72s] そういうことをやっておりました
[169.72s -> 171.44s] ちょっと遡るとですね
[171.44s -> 174.68s] 実は私もひまと見た形で
[174.68s -> 179.44s] 高校卒業後は大学はアメリカのイエル大学という
[180.00s -> 184.40s] 当時は統計学部を卒業しまして
[184.40s -> 187.10s] その後ELで働きながら
[187.10s -> 189.72s] ワシンコ大学に進学したという経理ですね
[189.72s -> 192.14s] 最近イール大学も知名度が上がってきて
[192.14s -> 193.62s] ちょっとよく分からない教授が
[193.62s -> 194.96s] いろんな番組でお話し
[195.00s -> 198.00s] 名前は誓いさせていただきますけども
[198.00s -> 200.40s] まあなんか知名度がラフィックで嬉しいんですが
[200.40s -> 203.00s] ここはゲルのタックスで
[203.00s -> 204.80s] オフソードとかケンブリッシュと生まれて
[204.80s -> 206.76s] これわざとなんかやめたりしてるんですよね
(venv) PS C:\Users\YN\huggingface_project> python sample.py
[2024-12-23 02:44:16.899] [ctranslate2] [thread 24832] [warning] The compute type inferred from the saved model is float16, but the target device or backend do not support efficient float16 computation. The model weights have been automatically converted to use the float32 compute type instead.
Transcription saved to transcription_output.txt
(venv) PS C:\Users\YN\huggingface_project> python sample.py
[2024-12-23 02:49:35.232] [ctranslate2] [thread 27968] [warning] The compute type inferred from the saved model is float16, but the target device or backend do not support efficient float16 computation. The model weights have been automatically converted to use the float32 compute type instead.
Traceback (most recent call last):
  File "C:\Users\YN\huggingface_project\sample.py", line 20, in <module>
    total_segments = len(segments)
                     ^^^^^^^^^^^^^
TypeError: object of type 'generator' has no len()
(venv) PS C:\Users\YN\huggingface_project> pyton sample.py
pyton : 用語 'pyton' は、コマンドレット、関数、スクリプト ファイル、または操作可能なプログラムの名前として認識されません。名前が正しく記述されていることを確認し、パスが含まれている場合はそのパスが正しいことを確認してから、再試行してください。
発生場所 行:1 文字:1
+ pyton sample.py
+ ~~~~~
    + CategoryInfo          : ObjectNotFound: (pyton:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException

(venv) PS C:\Users\YN\huggingface_project> python sample.py
[2024-12-23 02:50:37.413] [ctranslate2] [thread 31856] [warning] The compute type inferred from the saved model is float16, but the target device or backend do not support efficient float16 computation. The model weights have been automatically converted to use the float32 compute type instead.
[##################################################] 100.00% 完了
Transcription saved to transcription_output.txt
(venv) PS C:\Users\YN\huggingface_project> python samole.py
C:\Users\YN\AppData\Local\Programs\Python\Python312\python.exe: can't open file 'C:\\Users\\YN\\huggingface_project\\samole.py': [Errno 2] No such file or directory
(venv) PS C:\Users\YN\huggingface_project> python sample.py
[2024-12-23 02:57:56.041] [ctranslate2] [thread 30424] [warning] The compute type inferred from the saved model is float16, but the target device or backend do not support efficient float16 computation. The model weights have been automatically converted to use the float32 compute type instead.
[##################################################] 100.00% 完了
Transcription saved to transcription_output_20241223_030046.txt
(venv) PS C:\Users\YN\huggingface_project> python sample.py
[2024-12-23 03:04:16.856] [ctranslate2] [thread 26592] [warning] The compute type inferred from the saved model is float16, but the target device or backend do not support efficient float16 computation. The model weights have been automatically converted to use the float32 compute type instead.
[##################################################] 100.00% 完了
Transcription saved to transcription_output_20241223_030709.txt
Failed to send webhook notification. Status code: 400
(venv) PS C:\Users\YN\huggingface_project> python sample.py
[2024-12-23 03:09:42.353] [ctranslate2] [thread 21984] [warning] The compute type inferred from the saved model is float16, but the target device or backend do not support efficient float16 computation. The model weights have been automatically converted to use the float32 compute type instead.
Transcription saved to transcription_output_20241223_030942.txt
Webhook notification sent successfully.
(venv) PS C:\Users\YN\huggingface_project>




```



### 現状のsample.py

```python

import requests
from datetime import datetime
from faster_whisper import WhisperModel

# Webhook URL（自分のDiscord Webhook URLに置き換えてください）
WEBHOOK_URL = "ここにWebhookURLを入れる"

# モデルの読み込み
model = WhisperModel("kotoba-tech/kotoba-whisper-v2.0-faster")

# 音声ファイルの文字起こし
segments, info = model.transcribe("sample_ja_speech.wav", language="ja", chunk_length=15, condition_on_previous_text=False)

# 出力ファイル名にタイムスタンプを追加
timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
output_filename = f"transcription_output_{timestamp}.txt"

# テキストファイルに書き込む
with open(output_filename, "w", encoding="utf-8") as file:
    for segment in segments:
        # 各セグメントの開始時刻、終了時刻、テキストをファイルに書き込み
        file.write("[%.2fs -> %.2fs] %s\n" % (segment.start, segment.end, segment.text))

print(f"Transcription saved to {output_filename}")

# Webhookに送信するメッセージ
message = {
    "content": f"音声ファイルの文字起こしが完了しました！\n"
               f"使用した音声ファイル: sample_ja_speech.wav\n"
               f"出力したテキストファイル: {output_filename}\n"
               f"処理が正常に完了しました。"
}

# Webhook通知を送信
response = requests.post(WEBHOOK_URL, json=message)

# Webhook送信結果の確認
if response.status_code == 204:
    print("Webhook notification sent successfully.")
else:
    print(f"Failed to send webhook notification. Status code: {response.status_code}, Response: {response.text}")

```