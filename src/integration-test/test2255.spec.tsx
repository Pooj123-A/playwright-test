
import { test, expect } from "@playwright/experimental-ct-react";
import App2255 from "../example/App2255.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2255 />);
  await expect(component).toContainText("Learn React");
});
