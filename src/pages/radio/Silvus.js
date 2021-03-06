/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Silvus(props) {
	const group = useRef();
	const { nodes, materials } = useGLTF('/silvus.glb');
	return (
		<group ref={group} {...props} dispose={null}>
			<group position={[-0.47, 1.41, -0.68]} scale={[0.27, 1.11, 0.59]}>
				<mesh geometry={nodes.Cube_1.geometry} material={materials.Material} />
				<mesh geometry={nodes.Cube_2.geometry} material={nodes.Cube_2.material} />
				<mesh
					geometry={nodes.bool_obj.geometry}
					material={nodes.bool_obj.material}
					position={[0.01, 0.52, -1]}
					rotation={[Math.PI / 2, 0, -Math.PI]}
				/>
				<mesh
					geometry={nodes.bool_obj001.geometry}
					material={nodes.bool_obj001.material}
					position={[0.02, 0.53, -1.04]}
					rotation={[Math.PI / 2, 0, -Math.PI]}
				/>
				<mesh
					geometry={nodes.bool_obj002.geometry}
					material={nodes.bool_obj002.material}
					position={[-0.01, 0.54, -0.95]}
					rotation={[Math.PI / 2, 0, -Math.PI]}
				/>
				<mesh
					geometry={nodes.bool_obj003.geometry}
					material={nodes.bool_obj003.material}
					position={[0.01, 0.79, -1.04]}
					rotation={[1.57, 0, -Math.PI]}
				/>
				<mesh
					geometry={nodes.bool_obj004.geometry}
					material={nodes.bool_obj004.material}
					position={[-0.02, 0.27, -1.04]}
					rotation={[Math.PI / 2, 0, -Math.PI]}
				/>
				<mesh
					geometry={nodes.bool_obj005.geometry}
					material={nodes.bool_obj005.material}
					position={[1, 0.28, 0.01]}
					rotation={[Math.PI / 2, 0, -Math.PI / 2]}
				/>
				<mesh
					geometry={nodes.bool_obj006.geometry}
					material={nodes.bool_obj006.material}
					position={[0.02, 0.87, -1]}
					rotation={[1.66, 0, -Math.PI]}
					scale={[3.74, 1.69, 0.91]}
				/>
				<group position={[0.02, 2.83, 0.62]} scale={[1.23, 0.64, 0.44]}>
					<mesh geometry={nodes.Cylinder_1.geometry} material={nodes.Cylinder_1.material} />
					<mesh geometry={nodes.Cylinder_2.geometry} material={nodes.Cylinder_2.material} />
					<mesh geometry={nodes.CylinderPlate.geometry} material={nodes.CylinderPlate.material} />
				</group>
				<group position={[-0.06, 2.83, -0.64]} scale={[1.23, 0.64, 0.44]}>
					<mesh geometry={nodes.Cylinder002_1.geometry} material={nodes.Cylinder002_1.material} />
					<mesh geometry={nodes.Cylinder002_2.geometry} material={nodes.Cylinder002_2.material} />
					<mesh geometry={nodes.Cylinder001Plate.geometry} material={nodes.Cylinder001Plate.material} />
				</group>
				<mesh
					geometry={nodes.Examples_033.geometry}
					material={nodes.Examples_033.material}
					position={[-0.04, 0.27, -1.13]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={[1.25, 0.45, 0.33]}
				/>
				<mesh
					geometry={nodes.Examples_033001.geometry}
					material={nodes.Examples_033001.material}
					position={[-0.01, 0.79, -1.12]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={[1.25, 0.45, 0.33]}
				/>
				<mesh
					geometry={nodes.Examples_035.geometry}
					material={nodes.Examples_035.material}
					position={[-0.02, 1.02, -0.44]}
					scale={[2.04, 0.55, 0.73]}
				/>
				<mesh
					geometry={nodes.Examples_035001.geometry}
					material={nodes.Examples_035001.material}
					position={[0.02, 1.02, 0.46]}
					scale={[2.04, 0.55, 0.73]}
				/>
				<mesh
					geometry={nodes.Examples_035002.geometry}
					material={nodes.Examples_035002.material}
					position={[0.03, 1.03, 0.78]}
					scale={[2.04, 0.55, 0.73]}
				/>
				<mesh
					geometry={nodes.Examples_035003.geometry}
					material={nodes.Examples_035003.material}
					position={[-0.03, 1.01, -0.82]}
					scale={[2.04, 0.55, 0.73]}
				/>
			</group>
			<mesh
				geometry={nodes.Text.geometry}
				material={materials['CC0Textures/Metal029/1K-JPG']}
				position={[-0.21, 1.04, -0.7]}
				rotation={[Math.PI / 2, 0, -Math.PI / 2]}
				scale={[0.17, 0.17, 0.17]}
			/>
			<mesh
				geometry={nodes.Cylinder002.geometry}
				material={nodes.Cylinder002.material}
				position={[-0.46, 2.64, -0.78]}
				scale={[-0.26, -0.26, -0.26]}
			>
				<mesh
					geometry={nodes.Nut.geometry}
					material={materials['CC0Textures/Metal012/1K-JPG.001']}
					position={[0.05, 0.34, 0.01]}
					scale={[0.09, 0.09, 0.09]}
				/>
			</mesh>
			<group position={[-0.46, 2.56, -0.55]} scale={[0.2, 0.16, 0.2]}>
				<mesh geometry={nodes.Cylinder001.geometry} material={nodes.Cylinder001.material} />
				<mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.002']} />
			</group>
			<mesh
				geometry={nodes.blender_001.geometry}
				material={materials['.blender_001']}
				position={[-0.2, 0.67, -0.69]}
				rotation={[1.57, 0, -Math.PI / 2]}
				scale={[1.72, 1.72, 1.72]}
			/>
		</group>
	);
}

useGLTF.preload('/silvus.glb');
