
import { test, expect } from "@playwright/experimental-ct-react";
import App1181 from "./App1181.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1181 />);
  await expect(component).toContainText("Learn React");
});
