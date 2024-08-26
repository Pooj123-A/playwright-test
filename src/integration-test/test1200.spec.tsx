
import { test, expect } from "@playwright/experimental-ct-react";
import App1200 from "../example/App1200.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1200 />);
  await expect(component).toContainText("Learn React");
});
