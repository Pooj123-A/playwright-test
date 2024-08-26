
import { test, expect } from "@playwright/experimental-ct-react";
import App1537 from "../example/App1537.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1537 />);
  await expect(component).toContainText("Learn React");
});
