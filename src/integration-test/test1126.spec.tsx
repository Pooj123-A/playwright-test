
import { test, expect } from "@playwright/experimental-ct-react";
import App1126 from "../example/App1126.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1126 />);
  await expect(component).toContainText("Learn React");
});
