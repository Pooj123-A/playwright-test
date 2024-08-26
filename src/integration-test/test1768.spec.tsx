
import { test, expect } from "@playwright/experimental-ct-react";
import App1768 from "../example/App1768.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1768 />);
  await expect(component).toContainText("Learn React");
});
