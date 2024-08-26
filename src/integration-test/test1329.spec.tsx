
import { test, expect } from "@playwright/experimental-ct-react";
import App1329 from "../example/App1329.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1329 />);
  await expect(component).toContainText("Learn React");
});
