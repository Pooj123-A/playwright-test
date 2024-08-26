
import { test, expect } from "@playwright/experimental-ct-react";
import App1228 from "../example/App1228.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1228 />);
  await expect(component).toContainText("Learn React");
});
