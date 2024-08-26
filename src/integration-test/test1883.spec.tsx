
import { test, expect } from "@playwright/experimental-ct-react";
import App1883 from "../example/App1883.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1883 />);
  await expect(component).toContainText("Learn React");
});
