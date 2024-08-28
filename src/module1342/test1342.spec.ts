
import { test, expect } from "@playwright/experimental-ct-react";
import App1342 from "./App1342.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1342 />);
  await expect(component).toContainText("Learn React");
});
