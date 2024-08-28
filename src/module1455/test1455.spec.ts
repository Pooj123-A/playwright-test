
import { test, expect } from "@playwright/experimental-ct-react";
import App1455 from "./App1455.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1455 />);
  await expect(component).toContainText("Learn React");
});
