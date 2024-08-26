
import { test, expect } from "@playwright/experimental-ct-react";
import App1670 from "../example/App1670.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1670 />);
  await expect(component).toContainText("Learn React");
});
