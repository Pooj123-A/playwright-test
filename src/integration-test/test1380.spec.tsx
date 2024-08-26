
import { test, expect } from "@playwright/experimental-ct-react";
import App1380 from "../example/App1380.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1380 />);
  await expect(component).toContainText("Learn React");
});
