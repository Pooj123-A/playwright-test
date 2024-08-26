
import { test, expect } from "@playwright/experimental-ct-react";
import App1957 from "../example/App1957.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1957 />);
  await expect(component).toContainText("Learn React");
});
