
import { test, expect } from "@playwright/experimental-ct-react";
import App1542 from "../example/App1542.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1542 />);
  await expect(component).toContainText("Learn React");
});
