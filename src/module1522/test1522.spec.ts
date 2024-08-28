
import { test, expect } from "@playwright/experimental-ct-react";
import App1522 from "./App1522.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1522 />);
  await expect(component).toContainText("Learn React");
});
