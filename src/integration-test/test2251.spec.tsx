
import { test, expect } from "@playwright/experimental-ct-react";
import App2251 from "../example/App2251.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2251 />);
  await expect(component).toContainText("Learn React");
});
