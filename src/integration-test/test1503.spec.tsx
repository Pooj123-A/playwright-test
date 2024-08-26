
import { test, expect } from "@playwright/experimental-ct-react";
import App1503 from "../example/App1503.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1503 />);
  await expect(component).toContainText("Learn React");
});
