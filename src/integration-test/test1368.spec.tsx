
import { test, expect } from "@playwright/experimental-ct-react";
import App1368 from "../example/App1368.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1368 />);
  await expect(component).toContainText("Learn React");
});
