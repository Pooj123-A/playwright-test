
import { test, expect } from "@playwright/experimental-ct-react";
import App1926 from "../example/App1926.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1926 />);
  await expect(component).toContainText("Learn React");
});
