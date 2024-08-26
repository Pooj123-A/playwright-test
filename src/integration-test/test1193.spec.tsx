
import { test, expect } from "@playwright/experimental-ct-react";
import App1193 from "../example/App1193.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1193 />);
  await expect(component).toContainText("Learn React");
});
