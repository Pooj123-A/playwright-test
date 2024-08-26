
import { test, expect } from "@playwright/experimental-ct-react";
import App1221 from "../example/App1221.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1221 />);
  await expect(component).toContainText("Learn React");
});
