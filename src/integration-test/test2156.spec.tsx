
import { test, expect } from "@playwright/experimental-ct-react";
import App2156 from "../example/App2156.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2156 />);
  await expect(component).toContainText("Learn React");
});
