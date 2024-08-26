
import { test, expect } from "@playwright/experimental-ct-react";
import App1440 from "../example/App1440.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1440 />);
  await expect(component).toContainText("Learn React");
});
