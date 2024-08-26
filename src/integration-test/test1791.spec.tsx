
import { test, expect } from "@playwright/experimental-ct-react";
import App1791 from "../example/App1791.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1791 />);
  await expect(component).toContainText("Learn React");
});
