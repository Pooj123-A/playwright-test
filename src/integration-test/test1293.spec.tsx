
import { test, expect } from "@playwright/experimental-ct-react";
import App1293 from "../example/App1293.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1293 />);
  await expect(component).toContainText("Learn React");
});
