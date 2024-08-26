
import { test, expect } from "@playwright/experimental-ct-react";
import App1253 from "../example/App1253.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1253 />);
  await expect(component).toContainText("Learn React");
});
