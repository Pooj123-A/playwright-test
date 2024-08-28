
import { test, expect } from "@playwright/experimental-ct-react";
import App1386 from "./App1386.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1386 />);
  await expect(component).toContainText("Learn React");
});
