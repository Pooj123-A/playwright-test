
import { test, expect } from "@playwright/experimental-ct-react";
import App1500 from "../example/App1500.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1500 />);
  await expect(component).toContainText("Learn React");
});
