
import { test, expect } from "@playwright/experimental-ct-react";
import App1989 from "../example/App1989.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1989 />);
  await expect(component).toContainText("Learn React");
});
