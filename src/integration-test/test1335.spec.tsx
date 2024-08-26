
import { test, expect } from "@playwright/experimental-ct-react";
import App1335 from "../example/App1335.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1335 />);
  await expect(component).toContainText("Learn React");
});
