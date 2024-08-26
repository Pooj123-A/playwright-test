
import { test, expect } from "@playwright/experimental-ct-react";
import App1215 from "../example/App1215.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1215 />);
  await expect(component).toContainText("Learn React");
});
