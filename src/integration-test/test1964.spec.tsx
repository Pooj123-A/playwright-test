
import { test, expect } from "@playwright/experimental-ct-react";
import App1964 from "../example/App1964.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1964 />);
  await expect(component).toContainText("Learn React");
});
