
import { test, expect } from "@playwright/experimental-ct-react";
import App1600 from "../example/App1600.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1600 />);
  await expect(component).toContainText("Learn React");
});
