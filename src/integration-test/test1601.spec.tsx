
import { test, expect } from "@playwright/experimental-ct-react";
import App1601 from "../example/App1601.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1601 />);
  await expect(component).toContainText("Learn React");
});
