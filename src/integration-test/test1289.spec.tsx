
import { test, expect } from "@playwright/experimental-ct-react";
import App1289 from "../example/App1289.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1289 />);
  await expect(component).toContainText("Learn React");
});
