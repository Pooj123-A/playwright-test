
import { test, expect } from "@playwright/experimental-ct-react";
import App1308 from "../example/App1308.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1308 />);
  await expect(component).toContainText("Learn React");
});
