
import { test, expect } from "@playwright/experimental-ct-react";
import App1445 from "../example/App1445.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1445 />);
  await expect(component).toContainText("Learn React");
});
