
import { test, expect } from "@playwright/experimental-ct-react";
import App1347 from "../example/App1347.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1347 />);
  await expect(component).toContainText("Learn React");
});
