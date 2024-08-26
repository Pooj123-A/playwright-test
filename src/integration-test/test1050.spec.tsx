
import { test, expect } from "@playwright/experimental-ct-react";
import App1050 from "../example/App1050.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1050 />);
  await expect(component).toContainText("Learn React");
});
