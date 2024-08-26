
import { test, expect } from "@playwright/experimental-ct-react";
import App1881 from "../example/App1881.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1881 />);
  await expect(component).toContainText("Learn React");
});
