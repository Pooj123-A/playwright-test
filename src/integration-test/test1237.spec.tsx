
import { test, expect } from "@playwright/experimental-ct-react";
import App1237 from "../example/App1237.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1237 />);
  await expect(component).toContainText("Learn React");
});
