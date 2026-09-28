1\. Name of Challenge

***RoboHEARD 2027: Robot-centric Embodied Hearing and Dialogue for
Multi-Speaker Audio-Visual Speech Recognition***

2\. Challenge Organizers

[Ming Li, Professor, the Chinese University of Hong Kong,
Shenzhen](https://smiip-mli.github.io/)

[Pengyuan Zhang, Professor, Institute of Acoustics, Chinese Academic of
Sciences](https://people.ucas.ac.cn/~0046243?language=en)

[Kong Aik Lee, Associate Professor, The Hong Kong Polytechnic
University](https://sites.google.com/view/kongaiklee)

[Hung-yi Lee, Professor, National Taiwan
University](https://speech.ee.ntu.edu.tw/~hylee/index.php)

[Yu Tsao, Professor, Academia
Sinica](https://homepage.citi.sinica.edu.tw/pages/yu.tsao/)

[Hui Bu, CEO,
AISHELL](https://scholar.google.com/citations?user=eJT2LSAAAAAJ&hl=zh-CN)

[Kaizhu Huang, Professor, Duke Kunshan
University](https://sites.google.com/view/kaizhu-huang-homepage)

[Xiaoxiao Miao, Assistant Professor, Duke Kunshan
University](https://xiaoxiaomiao323.github.io/)

[Tiantian Feng, Assistant Professor, the Chinese University of Hong
Kong, Shenzhen](https://tiantiaf0627.github.io/)

[Xiaoyi Qin, Head of Multimodal Interaction, X Square
Robot](https://x2robot.com/en)

[Ruyi Gan, Co-founder and Head of Algorithms, X Square
Robot](https://x2robot.com/en)

[Hao Wang, Co-founder and CTO, X Square Robot](https://x2robot.com/en)

3\. Challenge Overview

As service robots are increasingly deployed in applications such as
companionship, elderly care, domestic assistance, navigation, and
shopping guidance, natural and robust human--robot interaction (HRI) is
becoming increasingly important. This challenge focuses on multimodal
perception for mobile service robots in two representative scenarios:
home companionship and navigation/shopping assistance.

The core task is multi-speaker audio-visual speech recognition in real
robot-centered interaction environments. Specifically, during robot
movement and service delivery, participants are required to use data
collected from the robot's onboard multimodal sensors-including
microphone arrays and multiple cameras with different viewing
angles-to determine **who spoke, when they spoke, and
what they said** in multi-speaker conversational scenes.

Compared with previous multi-speaker speech recognition challenges, this
challenge introduces several new and practical research problems. First,
the data are collected using real sensors mounted on actual mobile
robots in environments designed to resemble real-world service
scenarios, rather than relying on simulated data or wearable devices.
Second, the multimodal input signals come from heterogeneous
robot-mounted sensors, including microphone arrays and multi-view
cameras, providing richer but more complex perception cues. Third, the
challenge focuses on realistic multi-speaker human--robot interaction
scenarios, such as home companionship and navigation/shopping guidance,
where conversations are often spontaneous, overlapping, and
context-dependent. Finally, both the speakers and the robot may
continuously change their positions, orientations, and spatial
relationships during interaction and service execution. The robot's
movement also introduces additional ego-noise, such as motor noise and
motion-related acoustic interference, making robust perception
significantly more challenging.

This challenge aims to address not only new scientific and technical
problems in multi-speaker audio-visual speech recognition, speaker
attribution, multimodal fusion, and robot-centered perception, but also
to promote the development of signal processing technologies that can be
deployed on real mobile robots operating in real-world environments.

4\. Tasks

1)  Multi-speaker time-stamped audio-visual speech recognition (offline
    mode):

Recognize who spoke, when they spoke, and what they said in
multi-speaker conversational scenes from sensors on a mobile robot under
the offline mode. The Evaluation metrics is time-constrained minimum
permutation CER (tcpCER).

2)  Multi-speaker time-stamped audio-visual speech recognition (online
    mode):

Recognize who spoke, when they spoke, and what they said in
multi-speaker conversational scenes from sensors on a mobile robot under
the online mode, where the Mean End Delay latency is limited to 2
seconds on a single 5090 GPU card. The Evaluation metrics is also
time-constrained minimum permutation CER (tcpCER), but only solutions
satisfying the latency requirement is eligible for the ranking.

5\. Datasets

The dataset under collection is from the QUANTA X2 robot or its newer
model from X Square Robot. The configuration of the QUANTA X2 robot is
introduced in Figure 1.

![](media/image1.png){width="6.0in" height="3.6034722222222224in"} Fig 1
the QUANTA X2 robot

More details of this robot can be found at
<https://x2robot.com/en/product/quantum2>

The RoboHEARD 2027 Challenge provides an official development set and a
test set, while model training is restricted to the provided training
data and the additional eligible external open‑source data under the
rules summarized below.

Although the challenge offers a small‑scale training dataset,
participants are permitted to use any open‑source datasets for training,
as well as pre‑trained models, provided that (1) the data and models are
openly and freely accessible and are reported to the organizers before a
specified deadline (Nov 15st, 2026), and (2) all data sources and
checkpoints are clearly documented in the system description, with
appropriate citations or links.

To facilitate fair comparison and reproducibility, we have set a
reporting deadline by which participants must declare the datasets and
models/tools they intend to use. After collecting this information, we
will compile and release a full list to all participants. We believe
this mechanism enables transparency and ensures that all teams are aware
of the resources used by others, thereby supporting a fair and
reproducible evaluation environment.

We have completed the data collection. Data collection was carried out
using the QUANTA robot. Over 100 conversations were recorded in two
scenarios: home companionship and navigation/shopping guidance. Each
session lasts approximately 5--8 minutes and involves 3--6 human
participants who move along with the robot according to predefined
scripts for the respective scenario. In total, the speech corpus amounts
to about 80 hours of audio. The data are divided into training (50
hours), development (10 hours), and test (20 hours) splits, with strict
separation of speakers and recording environments across splits to avoid
any overlap. The sensor specifications are as follows:

- **Audio**: Microphone array -- circular configuration with 6
  microphones, diameter 7 cm, sampling at 16 kHz, 16‑bit resolution.

- **Vision**: The robot is equipped with **7 GMSL cameras** and **2
  Orbbec RGB‑D cameras**, distributed as:

  - Front of head: stereo RGB GMSL camera (2 units), resolution
    1600×1300, 30 Hz.

  - Rear of head: two single RGB GMSL cameras for bird's‑eye view,
    resolution 1600×1300, 30 Hz.

  - Each wrist: two single RGB GMSL cameras (i.e., 2 per wrist),
    resolution 1600×1300, 30 Hz.

  - Lower back: one RGB GMSL camera, resolution 1600×1300, 30 Hz.

  - Chest: one RGB‑D camera, resolution 640×480, 10 Hz.

  - Front of chassis: one RGB‑D camera, resolution 640×480, 10 Hz.

> All data have undergone rigorous quality control, and the **CC
> BY-NC-SA 4.0** data licenses are provided alongside the dataset.

6\. Leaderboard

We will use Codabench as the main host for the results submission and
leaderboard demonstrations. For validating the latency requirement for
the online track, the top 5 best-performing teams will be asked to
participate in the latency validation on a provided password-enabled GPU
server. By default, teams submit a Docker container exposing a
standardized streaming API, which the organizers run on the 5090 server.
Alternatively, teams may provide a hosted API endpoint (on our server or
their own), but for ranking eligibility the endpoint must report
per-request timing so that network overhead can be separated from model
latency, and must declare its hardware. The inference models/codes will
be removed after the organizers validate the latency requirement and
will only be used for this purpose.

7\. Latency Test for the online mode

Latency is validated on an in-house NVIDIA RTX 5090 server from Dec 7th,
2026, to Dec 22th, 2026, after the Leaderboard freezing deadline. The
latency test is mandatory for the top 5 performing teams, while other
teams are encouraged to participate as well.

By default, teams submit a Docker container exposing the standardized
streaming API; the organizers run it on the 5090 server. Teams may
alternatively provide a hosted API endpoint (on our server or their own),
but for ranking eligibility the endpoint must report per-request timing
so that network overhead can be separated from model latency, and must
declare its hardware. The inference models/codes in the Docker will be
removed after the organizers validate the latency requirement and will
only be used for this purpose.

Mean End Delay (MED) is an alignment‑based evaluation metric for
streaming speech recognition that measures the system\'s responsiveness
specifically at the end of each utterance. Following the definition in
prior work \[1\], for every test utterance, we first obtain the
ground‑truth end timestamp of the last word in the audio signal using a
forced‑alignment tool (e.g., Qwen3-ForcedAligner-0.6B). Simultaneously,
we record the system output timestamp at which the ASR model emits the
final word of that utterance. The per‑utterance end delay is then
computed as the difference between the predicted end timestamp and the
reference end timestamp. This MED metric directly reflects the system\'s
efficiency in detecting utterance boundaries and committing to a final
output---a critical aspect for interactive applications such as robot
dialogue systems, where low MED values indicate faster turn‑taking
decisions and reduced user waiting time. More details about the metrics
definition can be found in \[1\].

8\. Contingency plan if data collection or compute resources are delayed

We have completed the data collection, if in some unexpected cases, we
need to record some new test data, we can do it within 2 weeks. Since
the robot is physically in the data collection company. We can record
more data if needed.

9\. Baseline Systems

The organizers will provide an open-source baseline system for each
track along with the release of the development data. In our current
plan, the baseline systems are MOSS-Transcribe-Diarize 0.9B \[2\] for
the offline mode and the Nvidia's multitalker-parakeet-streaming-0.6b-v1
\[3\] for the online mode.

10\. Awards

Each track will award cash prizes of \$1,000, \$500, and \$300 to the
first, second, and third place winners, respectively. Additionally, all
winning teams will receive official certificates, which will be
presented during the ICASSP 2027 Challenge Session.

11\. Tentative Timeline

- Proposal Submission deadline -- July 27th , 2026

<!-- -->

- Proposal Acceptance Notification -- August 7th , 2026

- Launch of the challenge: Sep 15^st^, 2026

- Development data and baseline systems release: Oct 15^st^, 2026

- Registration deadline: Nov 15^st^, 2026

- Test sets and leaderboard release: Dec 1^st^, 2026

- Leaderboard freeze: Dec 7^th^, 2026

- Technical report submission: Dec 15^th^, 2026

- Releasing the list about allowed data and pre-trained models: Nov
  15^st^, 2026

- Latency test submission for track 2: Dec 22th, 2026

- Official Ranking released: Dec 30^th,^ 2026

<!-- -->

- 2-page Papers Due (by invitation only) -- January 07, 2027

<!-- -->

- 2-page Paper Acceptance Notification -- January 21, 2027

<!-- -->

- Camera-ready 2-page Papers Due -- January 28, 2027

12\. list of potential participants

There are more than 100 participating teams of our recently organized
relevant challenge, Real TSE challenge at SLT26 and Real World AVSE
challenge at ISCSLP26.

\[1\] Y. Wu et al., \"Delay-penalized transducer for low-latency
streaming ASR,\" *arXiv preprint arXiv:2211.00490*, 2022.

\[2\] <https://github.com/OpenMOSS/MOSS-Transcribe-Diarize/tree/main/>

\[3\] [nvidia/multitalker-parakeet-streaming-0.6b-v1 · Hugging
Face](https://huggingface.co/nvidia/multitalker-parakeet-streaming-0.6b-v1)
